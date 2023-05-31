<?php

namespace App\Tests\Integration;

use App\Entity\Education;
use App\Repository\EducationRepository;
use App\Tests\ApiTestCase;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;

class EducationTest extends ApiTestCase
{
    use RefreshDatabaseTrait;

    private EducationRepository $educationRepository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->educationRepository = self::getContainer()->get(EducationRepository::class);
    }

    public function testGetCollectionWithUnconnectedUser(): void
    {
        $response = static::createClient()->request('GET', '/api/educations');

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceCollectionJsonSchema(Education::class);
        $this->assertCount(6, $response->toArray()['hydra:member']);
    }

    public function testGetEducationWithUnconnectedUser(): void
    {
        $uri = $this->findIriBy(Education::class, ['name' => 'iut clermont']);

        static::createClient()->request('GET', $uri);

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceItemJsonSchema(Education::class);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Education',
            '@type' => 'Education',
            'name' => 'iut clermont',
            'city' => 'Clermont-Ferrand',
            'studyType' => 'Licence',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'image' => [
                '@type' => 'Media',
                'contentUrl' => '/media/fichier.png'
            ]
        ]);
    }

    public function testPostEducationWithUnconnectedUser(): void
    {
        static::createClient()->request('POST', '/api/admin/educations', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'iut clermont',
                    'city' => 'Clermont-Ferrand',
                    'studyType' => 'Licence',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(401);
    }

    public function testPostEducationWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/admin/educations', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'iut clermont',
                    'city' => 'Clermont-Ferrand',
                    'studyType' => 'Licence',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(201);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Education',
            '@type' => 'Education',
            'name' => 'iut clermont',
            'city' => 'Clermont-Ferrand',
            'studyType' => 'Licence',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'startedAt' => '2020-09-22T00:00:00+02:00',
            'endedAt' => '2022-11-19T00:00:00+01:00',
        ]);
    }

    public function testPostEducationWithAdminAndBadRequest(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/admin/educations', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'iut clermont',
                    'city' => '',
                    'studyType' => 'Licence',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'file' => $this->getUploadedFile('education.png'),
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(422);
        $this->assertJsonContains([
            '@context' => '/api/contexts/ConstraintViolationList',
            '@type' => 'ConstraintViolationList',
            'violations' => [
                [
                    'propertyPath' => 'city',
                    'message' => 'Cette chaîne est trop courte. Elle doit avoir au minimum 5 caractères.'
                ]
            ]
        ]);
    }

    public function testDeleteEducationWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->educationRepository->findOneBy(['city' => 'Clermont-Ferrand']);

        $client->request('DELETE', sprintf('/api/admin/educations/%s', $item->getId()));

        $this->assertResponseStatusCodeSame(204);
    }

    public function testPutEducationWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->educationRepository->findOneBy(['city' => 'Clermont-Ferrand']);

        $client->request('PUT', sprintf('/api/admin/educations/%s', $item->getId()), [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'iut clermont',
                    'city' => 'Clermont-Ferrand',
                    'studyType' => 'Licence',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Education',
            '@type' => 'Education',
            'name' => 'iut clermont',
            'city' => 'Clermont-Ferrand',
            'studyType' => 'Licence',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'startedAt' => '2020-09-22T00:00:00+02:00',
            'endedAt' => '2022-11-19T00:00:00+01:00',
        ]);
    }

    public function testPatchProjectWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->educationRepository->findOneBy(['city' => 'Clermont-Ferrand']);

        $client->request('PATCH', sprintf('/api/admin/educations/%s', $item->getId()), [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'iut clermont',
                    'city' => 'Clermont-Ferrand',
                    'studyType' => 'Licence',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'file' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Education',
            '@type' => 'Education',
            'name' => 'iut clermont',
            'city' => 'Clermont-Ferrand',
            'studyType' => 'Licence',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'startedAt' => '2020-09-22T00:00:00+02:00',
            'endedAt' => '2022-11-19T00:00:00+01:00',
        ]);
    }
}

