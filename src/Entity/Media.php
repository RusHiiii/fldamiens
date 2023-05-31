<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiProperty;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Embeddable]
class Media
{
    #[ApiProperty(types: ['https://schema.org/contentUrl'])]
    #[Groups(['Media:read'])]
    public ?string $contentUrl = null;

    #[ORM\Column(nullable: true)]
    public ?string $filePath = null;

    public function getFilePath(): ?string
    {
        return $this->filePath;
    }

    public function setFilePath(?string $filePath): void
    {
        $this->filePath = $filePath;
    }

    public function getContentUrl(): ?string
    {
        return $this->contentUrl;
    }

    public function setContentUrl(?string $contentUrl): void
    {
        $this->contentUrl = $contentUrl;
    }
}
