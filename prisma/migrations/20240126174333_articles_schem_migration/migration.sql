-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "author_id" INTEGER NOT NULL,
    "publish_date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT,
    "views" INTEGER NOT NULL,
    "comments" INTEGER NOT NULL,
    "featured_image" TEXT NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
