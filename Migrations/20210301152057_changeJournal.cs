using Microsoft.EntityFrameworkCore.Migrations;

namespace EverydayJournal.Migrations
{
    public partial class changeJournal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "iD",
                table: "Journals",
                newName: "id");

            migrationBuilder.AddColumn<string>(
                name: "date",
                table: "Journals",
                type: "varchar",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "date",
                table: "Journals");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Journals",
                newName: "iD");
        }
    }
}
