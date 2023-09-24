<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\ProjectRepository;
use App\State\EditProjectProcessor;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: ProjectRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['Project:read', 'Media:read']],
    denormalizationContext: ['groups' => ['Project:write']],
    order: ['year' => 'DESC'],
    extraProperties: ['standard_put' => true]
)]
#[Get(uriTemplate: '/projects/{id}')]
#[GetCollection(uriTemplate: '/projects')]
#[Post(uriTemplate: '/projects', inputFormats: ['multipart' => ['multipart/form-data']])]
#[Put(uriTemplate: '/projects/{id}', inputFormats: ['multipart' => ['multipart/form-data']], processor: EditProjectProcessor::class)]
#[Patch(uriTemplate: '/projects/{id}', inputFormats: ['multipart' => ['multipart/form-data']], processor: EditProjectProcessor::class)]
#[Delete(uriTemplate: '/projects/{id}')]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['Project:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['Project:read', 'Project:write'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['Project:read', 'Project:write'])]
    private ?string $shortDescription = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['Project:read', 'Project:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['Project:read', 'Project:write'])]
    private ?string $url = null;

    #[ORM\Column(length: 4)]
    #[Groups(['Project:read', 'Project:write'])]
    private ?string $year = null;

    #[ORM\Embedded(class: Media::class)]
    #[Groups(['Project:read'])]
    private Media $primaryImage;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "primaryImage.filePath")]
    #[Groups(['Project:write'])]
    public ?File $primaryFile = null;

    #[ORM\Embedded(class: Media::class)]
    #[Groups(['Project:read'])]
    private Media $secondaryImage;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "secondaryImage.filePath")]
    #[Groups(['Project:write'])]
    public ?File $secondaryFile = null;

    #[ORM\Column]
    #[Groups(['Project:read'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    #[Groups(['Project:read'])]
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $this->primaryImage = new Media();
        $this->secondaryImage = new Media();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): self
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getYear(): ?string
    {
        return $this->year;
    }

    public function setYear(?string $year): void
    {
        $this->year = $year;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function update(): void
    {
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getPrimaryImage(): ?Media
    {
        return $this->primaryImage;
    }

    public function setPrimaryImage(?Media $primaryImage): void
    {
        $this->primaryImage = $primaryImage;
    }

    public function getPrimaryFile(): ?File
    {
        return $this->primaryFile;
    }

    public function setPrimaryFile(?File $primaryFile): void
    {
        $this->primaryFile = $primaryFile;
    }

    public function getSecondaryImage(): ?Media
    {
        return $this->secondaryImage;
    }

    public function setSecondaryImage(?Media $secondaryImage): void
    {
        $this->secondaryImage = $secondaryImage;
    }

    public function getSecondaryFile(): ?File
    {
        return $this->secondaryFile;
    }

    public function setSecondaryFile(?File $secondaryFile): void
    {
        $this->secondaryFile = $secondaryFile;
    }
}
