-- CreateTable
CREATE TABLE "Node" (
    "id" TEXT NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "progress" DECIMAL(65,30) NOT NULL,
    "TotalSales" DECIMAL(65,30) NOT NULL,
    "TargetSales" DECIMAL(65,30) NOT NULL,
    "isParent" BOOLEAN NOT NULL DEFAULT false,
    "nodeId" TEXT NOT NULL,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NodeToNode" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_NodeToNode_AB_unique" ON "_NodeToNode"("A", "B");

-- CreateIndex
CREATE INDEX "_NodeToNode_B_index" ON "_NodeToNode"("B");

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NodeToNode" ADD FOREIGN KEY ("A") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NodeToNode" ADD FOREIGN KEY ("B") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;
