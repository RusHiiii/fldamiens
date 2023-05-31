<?php

namespace App\Tests\Integration;

use App\Entity\Experience;
use App\Repository\ExperienceRepository;
use App\Tests\ApiTestCase;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;

class ExperienceTest extends ApiTestCase
{
    use RefreshDatabaseTrait;

    private ExperienceRepository $experienceRepository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->experienceRepository = self::getContainer()->get(ExperienceRepository::class);
    }

    public function testGetCollectionWithUnconnectedUser(): void
    {
        $response = static::createClient()->request('GET', '/api/experiences');

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceCollectionJsonSchema(Experience::class);
        $this->assertCount(4, $response->toArray()['hydra:member']);
    }

    public function testGetExperienceWithUnconnectedUser(): void
    {
        $uri = $this->findIriBy(Experience::class, ['company' => 'ITNetwork']);

        static::createClient()->request('GET', $uri);

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceItemJsonSchema(Experience::class);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Experience',
            '@type' => 'Experience',
            'name' => 'mon experience',
            'city' => 'Blois',
            'company' => 'ITNetwork',
            'startedAt' => '2020-09-22T00:00:00+02:00',
            'endedAt' => '2022-11-19T00:00:00+01:00',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'createdAt' => '2020-10-15T00:00:00+02:00',
            'updatedAt' => '2023-03-05T00:00:00+01:00',
            'image' => [
                '@type' => 'Media',
                'contentUrl' => '/media/fichier.png'
            ]
        ]);
    }

    public function testPostExperienceWithUnconnectedUser(): void
    {
        static::createClient()->request('POST', '/api/admin/experiences', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'mon experience',
                    'city' => 'Blois',
                    'company' => 'Company 2',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(401);
    }

    public function testPostExperienceWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/admin/experiences', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'mon experience',
                    'city' => 'Blois',
                    'company' => 'Company 2',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(201);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Experience',
            '@type' => 'Experience',
            'name' => 'mon experience',
            'city' => 'Blois',
            'company' => 'Company 2',
            'startedAt' => '2020-09-22T00:00:00+02:00',
            'endedAt' => '2022-11-19T00:00:00+01:00',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
        ]);
    }

    public function testPostExperienceWithBadRequest(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/admin/experiences', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => '',
                    'city' => '',
                    'companyBADKEY' => 'Company 2',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                    'description' => 's',
                ],
                'files' => [
                    'fileBADKEY' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(422);
        $this->assertJsonContains([
            '@context' => '/api/contexts/ConstraintViolationList',
            '@type' => 'ConstraintViolationList',
            'violations' => [
                [
                    'propertyPath' => 'name',
                    'message' => 'Cette chaîne est trop courte. Elle doit avoir au minimum 5 caractères.'
                ],
                [
                    'propertyPath' => 'company',
                    'message' => 'Cette valeur ne doit pas être nulle.'
                ],
                [
                    'propertyPath' => 'city',
                    'message' => 'Cette chaîne est trop courte. Elle doit avoir au minimum 5 caractères.'
                ],
                [
                    'propertyPath' => 'file',
                    'message' => 'Cette valeur ne doit pas être nulle.'
                ]
            ]
        ]);
    }

    public function testDeleteExperienceWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->experienceRepository->findOneBy(['company' => 'ITNetwork']);

        $client->request('DELETE', sprintf('/api/admin/experiences/%s', $item->getId()));

        $this->assertResponseStatusCodeSame(204);
    }

    public function testDeleteExperienceWithAdminAndBadExperienceId(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('DELETE', '/api/admin/experiences/555');

        $this->assertResponseStatusCodeSame(404);
    }

    public function testPutExperienceWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->experienceRepository->findOneBy(['company' => 'ITNetwork']);

        $client->request('PUT', sprintf('/api/admin/experiences/%s', $item->getId()), [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'mon experience',
                    'city' => 'Blois',
                    'company' => 'Company 2',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Experience',
            '@type' => 'Experience',
            'name' => 'mon experience',
            'city' => 'Blois',
            'company' => 'Company 2',
            'startedAt' => '2020-09-22T00:00:00+02:00',
            'endedAt' => '2022-11-19T00:00:00+01:00',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
        ]);
    }

    public function testPatchExperienceWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->experienceRepository->findOneBy(['company' => 'ITNetwork']);

        $client->request('PATCH', sprintf('/api/admin/experiences/%s', $item->getId()), [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'mon experience',
                    'city' => 'Blois',
                    'company' => 'Company 2',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Experience',
            '@type' => 'Experience',
            'name' => 'mon experience',
            'city' => 'Blois',
            'company' => 'Company 2',
            'startedAt' => '2020-09-22T00:00:00+02:00',
            'endedAt' => '2022-11-19T00:00:00+01:00',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
        ]);
    }
}

