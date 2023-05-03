<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Education;
use App\Entity\Project;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class EditUserProcessor implements ProcessorInterface
{
    private ProcessorInterface $persistProcessor;

    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(ProcessorInterface $persistProcessor, UserPasswordHasherInterface $passwordHasher)
    {
        $this->persistProcessor = $persistProcessor;
        $this->passwordHasher = $passwordHasher;
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        /**
         * @var User $data
         */
        $data->update();

        if (!$data->getPlainPassword()) {
            return $this->persistProcessor->process($data, $operation, $uriVariables, $context);
        }

        $hashedPassword = $this->passwordHasher->hashPassword(
            $data,
            $data->getPlainPassword()
        );

        $data->setPassword($hashedPassword);
        $data->eraseCredentials();

        return $this->persistProcessor->process($data, $operation, $uriVariables, $context);
    }
}
