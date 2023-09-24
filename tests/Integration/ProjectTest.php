<?php

namespace App\Tests\Integration;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use App\Tests\ApiTestCase;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;

class ProjectTest extends ApiTestCase
{
    use RefreshDatabaseTrait;

    private ProjectRepository $projectRepository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->projectRepository = self::getContainer()->get(ProjectRepository::class);
    }

    public function testGetCollectionWithUnconnectedUser(): void
    {
        $response = static::createClient()->request('GET', '/api/projects');

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceCollectionJsonSchema(Project::class);
        $this->assertCount(6, $response->toArray()['hydra:member']);
    }

    public function testGetProjectWithUnconnectedUser(): void
    {
        $uri = $this->findIriBy(Project::class, ['name' => 'photovergnat']);

        static::createClient()->request('GET', $uri);

        $this->assertResponseStatusCodeSame(200);
        $this->assertMatchesResourceItemJsonSchema(Project::class);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Project',
            '@type' => 'Project',
            'name' => 'photovergnat',
            'shortDescription' => 'ceci est une petite description',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'url' => 'https://www.photovergnat.fr/',
            'year' => '2020',
            'primaryImage' => [
                '@type' => 'Media',
                'contentUrl' => '/media/fichier.png'
            ],
            'secondaryImage' => [
                '@type' => 'Media',
                'contentUrl' => '/media/fichier.png'
            ]
        ]);
    }

    public function testPostProjectWithUnconnectedUser(): void
    {
        static::createClient()->request('POST', '/api/projects', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'photovergnat',
                    'shortDescription' => 'ceci est une petite description',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'url' => 'https://www.photovergnat.fr/',
                    'year' => '2020',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'primaryImage' => $this->getUploadedFile(),
                    'secondaryImage' => $this->getUploadedFile()
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(401);
    }

    public function testPostProjectWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/projects', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'photovergnat',
                    'shortDescription' => 'ceci est une petite description',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'url' => 'https://www.photovergnat.fr/',
                    'year' => '2020',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'primaryFile' => $this->getUploadedFile('project.png'),
                    'secondaryFile' => $this->getUploadedFile('project2.png')
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(201);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Project',
            '@type' => 'Project',
            'name' => 'photovergnat',
            'shortDescription' => 'ceci est une petite description',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'url' => 'https://www.photovergnat.fr/',
            'year' => '2020'
        ]);
    }

    public function testPostProjectWithAdminAndBadRequest(): void
    {
        $client = $this->loginAsAdmin();

        $client->request('POST', '/api/projects', [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => '',
                    'shortDescriptionBAD' => 'ceci est une petite description',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'url' => 'https://www.photovergnat.fr/',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'primaryFile' => $this->getUploadedFile('project.png'),
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
                    'propertyPath' => 'shortDescription',
                    'message' => 'Cette valeur ne doit pas être nulle.'
                ],
                [
                    'propertyPath' => 'year',
                    'message' => 'Cette valeur ne doit pas être nulle.'
                ]
            ]
        ]);
    }

    public function testDeleteProjectWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->projectRepository->findOneBy(['name' => 'photovergnat']);

        $client->request('DELETE', sprintf('/api/projects/%s', $item->getId()));

        $this->assertResponseStatusCodeSame(204);
    }

    public function testPutProjectWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->projectRepository->findOneBy(['name' => 'photovergnat']);

        $client->request('PUT', sprintf('/api/projects/%s', $item->getId()), [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'photovergnat',
                    'shortDescription' => 'ceci est une petite description',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'url' => 'https://www.photovergnat.fr/',
                    'year' => '2020',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'primaryFile' => $this->getUploadedFile('project.png'),
                    'secondaryFile' => $this->getUploadedFile('project2.png')
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Project',
            '@type' => 'Project',
            'name' => 'photovergnat',
            'shortDescription' => 'ceci est une petite description',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'url' => 'https://www.photovergnat.fr/',
            'year' => '2020'
        ]);
    }

    public function testPatchProjectWithAdmin(): void
    {
        $client = $this->loginAsAdmin();

        $item = $this->projectRepository->findOneBy(['name' => 'photovergnat']);

        $client->request('PATCH', sprintf('/api/projects/%s', $item->getId()), [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'extra' => [
                'parameters' => [
                    'name' => 'photovergnat',
                    'shortDescription' => 'ceci est une petite description',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
                    'url' => 'https://www.photovergnat.fr/',
                    'year' => '2020',
                    'startedAt' => '2020-09-22T00:00:00+02:00',
                    'endedAt' => '2022-11-19T00:00:00+01:00',
                ],
                'files' => [
                    'primaryFile' => $this->getUploadedFile('project.png'),
                    'secondaryFile' => $this->getUploadedFile('project2.png')
                ],
            ]
        ]);

        $this->assertResponseStatusCodeSame(200);
        $this->assertJsonContains([
            '@context' => '/api/contexts/Project',
            '@type' => 'Project',
            'name' => 'photovergnat',
            'shortDescription' => 'ceci est une petite description',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec tincidunt libero.',
            'url' => 'https://www.photovergnat.fr/',
            'year' => '2020'
        ]);
    }
}

