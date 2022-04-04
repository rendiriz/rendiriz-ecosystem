-- CreateTable
CREATE TABLE "post_most_view" (
    "id" TEXT NOT NULL,
    "id_post" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "total" BIGINT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_most_view_pkey" PRIMARY KEY ("id")
);
