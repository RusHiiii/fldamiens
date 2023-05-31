<?php

namespace App\Alice\Provider;

use App\Entity\User;
use Faker\Provider\Base as BaseProvider;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactoryInterface;

final class UserProvider extends BaseProvider
{

    private PasswordHasherFactoryInterface $passwordHasher;

    public function __construct(PasswordHasherFactoryInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function encodePassword(string $password): string
    {
        return $this->passwordHasher->getPasswordHasher(User::class)->hash($password);
    }
}
