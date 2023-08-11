<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\EducationRepository;
use App\State\EditEducationProcessor;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: EducationRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['Education:read', 'Media:read']],
    denormalizationContext: ['groups' => ['Education:write']],
    order: ['startedAt' => 'DESC'],
    extraProperties: ['standard_put' => true]
)]
#[Get(uriTemplate: '/educations/{id}')]
#[GetCollection(uriTemplate: '/educations')]
#[Post(uriTemplate: '/educations', inputFormats: ['multipart' => ['multipart/form-data']])]
#[Put(uriTemplate: '/educations/{id}', inputFormats: ['multipart' => ['multipart/form-data']], processor: EditEducationProcessor::class)]
#[Patch(uriTemplate: '/educations/{id}', inputFormats: ['multipart' => ['multipart/form-data']], processor: EditEducationProcessor::class)]
#[Delete(uriTemplate: '/educations/{id}')]
class Education
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['Education:read'])]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['Education:read', 'Education:write'])]
    private ?string $name = null;

    #[ORM\Column]
    #[Groups(['Education:read', 'Education:write'])]
    private ?\DateTimeImmutable $startedAt = null;

    #[ORM\Column]
    #[Groups(['Education:read', 'Education:write'])]
    private ?\DateTimeImmutable $endedAt = null;

    #[ORM\Column(length: 255)]
    #[Groups(['Education:read', 'Education:write'])]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    #[Groups(['Education:read', 'Education:write'])]
    private ?string $studyType = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['Education:read', 'Education:write'])]
    private ?string $description = null;

    #[ORM\Embedded(class: Media::class)]
    #[Groups(['Education:read'])]
    private Media $image;

    #[Vich\UploadableField(mapping: "media_object", fileNameProperty: "image.filePath")]
    #[Groups(['Education:write'])]
    public ?File $file = null;

    #[ORM\Column]
    #[Groups(['Education:read'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    #[Groups(['Education:read'])]
    private ?\DateTimeImmutable $updatedAt = null;

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

    public function setEndedAt(\DateTimeImmutable $endedAt): self
    {
        $this->endedAt = $endedAt;

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

    public function getStudyType(): ?string
    {
        return $this->studyType;
    }

    public function setStudyType(string $studyType): self
    {
        $this->studyType = $studyType;

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
