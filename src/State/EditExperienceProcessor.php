<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Education;
use App\Entity\Experience;

class EditExperienceProcessor implements ProcessorInterface
{
    private ProcessorInterface $persistProcessor;

    public function __construct(ProcessorInterface $persistProcessor)
    {
        $this->persistProcessor = $persistProcessor;
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        /**
         * @var Experience $data
         */
        $data->update();

        return $this->persistProcessor->process($data, $operation, $uriVariables, $context);
    }
}
