<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230510150845 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add project image';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE project ADD primary_image_file_path VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE project ADD secondary_image_file_path VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE project DROP primary_image_file_path');
        $this->addSql('ALTER TABLE project DROP secondary_image_file_path');
    }
}
