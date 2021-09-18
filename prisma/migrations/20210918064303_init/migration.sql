-- CreateTable
CREATE TABLE "Node" (
    "id" TEXT NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "progress" DECIMAL(65,30) NOT NULL,
    "TotalSales" DECIMAL(65,30) NOT NULL,
    "Status" TEXT NOT NULL,
    "isParent" BOOLEAN NOT NULL,
    "nodeId" TEXT,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "Node"("id") ON DELETE SET NULL ON UPDATE CASCADE;
