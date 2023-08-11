<?php

namespace App\Tests\Integration;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Tests\ApiTestCase;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;

class UserTest extends ApiTestCase
{
    use RefreshDatabaseTrait;

    protected function setUp(): void
    {
        parent::setUp();
    }

    public function testGetCollectionWithUnconnectedUser(): void
    {
        static::createClient()->request('GET', '/api/users');

        $this->assertResponseStatusCodeSame(401);
        $this->assertJsonContains(['hydra:description' => 'Full authentication is required to access this resource.']);
    }

    public function testGetCollectionWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $response = $client->request('GET', '/api/users');

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceCollectionJsonSchema(User::class);
        $this->assertCount(7, $response->toArray()['hydra:member']);
    }

    public function testGetCollectionWithUser(): void
    {
        $client = $this->loginAsUser();

        $client->request('GET', '/api/users');

        $this->assertResponseStatusCodeSame(403);
    }

    public function testGetUserWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $uri = $this->findIriBy(User::class, ['email' => 'admin@fldamiens.fr']);

        $client->request('GET', $uri);

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceItemJsonSchema(User::class);
        $this->assertJsonContains([
            '@context' => '/api/contexts/User',
            '@type' => 'User',
            'email' => 'admin@fldamiens.fr',
            'roles' => [
                'ROLE_ADMIN',
                'ROLE_USER'
            ],
            'firstname' => 'Admin',
            'lastname' => 'Admin',
            'createdAt' => '2020-10-15T00:00:00+02:00',
            'updatedAt' => '2023-03-05T00:00:00+01:00'
        ]);
    }

    public function testPostUserWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/users', ['json' => [
            'email' => 'mail@fldamiens.fr',
            'roles' => [
                'ROLE_ADMIN'
            ],
            'plainPassword' => 'abcd123*',
            'firstname' => 'test',
            'lastname' => 'test'
        ]]);

        $this->assertResponseStatusCodeSame(201);
        $this->assertJsonContains([
            '@context' => '/api/contexts/User',
            '@type' => 'User',
            'email' => 'mail@fldamiens.fr',
            'roles' => [
                'ROLE_ADMIN',
                'ROLE_USER'
            ],
            'firstname' => 'test',
            'lastname' => 'test'
        ]);
    }

    public function testPostUserWithErrors(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/users', ['json' => [
            'email' => 'mail@fldamiens.fr',
            'roles' => [
                'TEST'
            ],
            'plainPassword' => 'a',
            'firstname' => ''
        ]]);

        $this->assertResponseStatusCodeSame(422);
        $this->assertJsonContains([
            '@context' => '/api/contexts/ConstraintViolationList',
            '@type' => 'ConstraintViolationList',
            'violations' => [
                [
                    'propertyPath' => 'roles',
                    'message' => 'Une ou plusieurs des valeurs soumises sont invalides.'
                ],
                [
                    'propertyPath' => 'plainPassword',
                    'message' => 'Cette chaîne est trop courte. Elle doit avoir au minimum 8 caractères.'
                ],
                [
                    'propertyPath' => 'firstname',
                    'message' => 'Cette chaîne est trop courte. Elle doit avoir au minimum 2 caractères.'
                ],
                [
                    'propertyPath' => 'lastname',
                    'message' => 'Cette valeur ne doit pas être nulle.'
                ]
            ]
        ]);
    }

    public function testPutUserWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $uri = $this->findIriBy(User::class, ['email' => 'admin@fldamiens.fr']);

        $client->request('PUT', $uri, ['json' => [
            'email' => 'second-mail@fldamiens.fr',
            'roles' => [
                'ROLE_ADMIN'
            ],
            'plainPassword' => 'asazdsdez12*M',
            'firstname' => 'Admin',
            'lastname' => 'Admin'
        ]]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/User',
            '@type' => 'User',
            'email' => 'second-mail@fldamiens.fr',
            'roles' => [
                'ROLE_ADMIN',
                'ROLE_USER'
            ],
            'firstname' => 'Admin',
            'lastname' => 'Admin'
        ]);
    }

    public function testDeleteUserWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $uri = $this->findIriBy(User::class, ['email' => 'admin@fldamiens.fr']);

        $client->request('DELETE', $uri);

        $this->assertResponseStatusCodeSame(204);
    }

    public function testPatchUserWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $uri = $this->findIriBy(User::class, ['email' => 'admin@fldamiens.fr']);

        $client->request('PATCH', $uri, [
            'headers' => [
                'content-type' => 'application/merge-patch+json'
            ],
            'json' => [
                'email' => 'second-mail@fldamiens.fr',
                'roles' => [
                    'ROLE_ADMIN'
                ],
                'plainPassword' => 'asazdsdez12*M',
                'firstname' => 'Admin',
                'lastname' => 'Admin'
            ]
        ]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/User',
            '@type' => 'User',
            'email' => 'second-mail@fldamiens.fr',
            'roles' => [
                'ROLE_ADMIN',
                'ROLE_USER'
            ],
            'firstname' => 'Admin',
            'lastname' => 'Admin',
            'createdAt' => '2020-10-15T00:00:00+02:00'
        ]);
    }
}

