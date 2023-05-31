<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\ExperienceRepository;
use App\State\EditExperienceProcessor;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\DBAL\Types\Types;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Doctrine\ORM\Mapping as ORM;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: ExperienceRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['Experience:read', 'Media:read']],
    denormalizationContext: ['groups' => ['Experience:write']],
    order: ['startedAt' => 'DESC'],
    extraProperties: ['standard_put' => true]
)]
#[Get(uriTemplate: '/experiences/{id}')]
#[GetCollection(uriTemplate: '/experiences')]
#[Post(uriTemplate: '/admin/experiences', inputFormats: ['multipart' => ['multipart/form-data']])]
#[Put(uriTemplate: '/admin/experiences/{id}', inputFormats: ['multipart' => ['multipart/form-data']], processor: EditExperienceProcessor::class)]
#[Patch(uriTemplate: '/admin/experiences/{id}', inputFormats: ['multipart' => ['multipart/form-data']], processor: EditExperienceProcessor::class)]
#[Delete(uriTemplate: '/admin/experiences/{id}')]
class Experience
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['Experience:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['Experience:read', 'Experience:write'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['Experience:read', 'Experience:write'])]
    private ?string $company = null;

    #[ORM\Column(length: 255)]
    #[Groups(['Experience:read', 'Experience:write'])]
    private ?string $city = null;

    #[ORM\Column]
    #[Groups(['Experience:read', 'Experience:write'])]
    private ?\DateTimeImmutable $startedAt = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['Experience:read', 'Experience:write'])]
    private ?\DateTimeImmutable $endedAt = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['Experience:read', 'Experience:write'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['Experience:read'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    #[Groups(['Experience:read'])]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\Embedded(class: Media::class)]
    #[Groups(['Experience:read'])]
    private Media $image;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "image.filePath")]
    #[Groups(['Experience:write'])]
    public ?File $file = null;

    public function __construct()
    {
        $this->image = new Media();
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

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getStartedAt(): ?\DateTimeImmutable
    {
        return $this->startedAt;
    }

    public function setStartedAt(\DateTimeImmutable $startedAt): self
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getEndedAt(): ?\DateTimeImmutable
    {
        return $this->endedAt;
    }

    public function setEndedAt(?\DateTimeImmutable $endedAt): self
    {
        $this->endedAt = $endedAt;

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

    public function getImage(): Media
    {
        return $this->image;
    }

    public function setImage(Media $image): void
    {
        $this->image = $image;
    }

    public function getFile(): ?File
    {
        return $this->file;
    }

    public function setFile(?File $file): void
    {
        $this->file = $file;
    }
}
