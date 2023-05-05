<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase as ApiPlatformTestCase;
use App\Repository\UserRepository;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ApiTestCase extends ApiPlatformTestCase
{
    use RefreshDatabaseTrait;

    private UserRepository $userRepository;

    private Filesystem $filesystem;

    protected function setUp(): void
    {
        parent::setUp();
        $this->userRepository = self::getContainer()->get(UserRepository::class);
        $this->filesystem = self::getContainer()->get(Filesystem::class);
    }

    protected function loginAsAdmin()
    {
        $client = static::createClient();

        $adminUser = $this->userRepository->findOneByEmail('admin@fldamiens.fr');
        $client->loginUser($adminUser);

        return $client;
    }

    protected function loginAsUser()
    {
        $client = static::createClient();

        $user = $this->userRepository->findOneByEmail('user@fldamiens.fr');
        $client->loginUser($user);

        return $client;
    }

    protected function getUploadedFile(string $name = 'image.png')
    {
        $this->filesystem->copy('fixtures/media/image.png', sprintf('/tmp/%s', $name));

        return new UploadedFile(sprintf('/tmp/%s', $name), $name);
    }
}
