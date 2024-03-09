import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { taskSchema } from "./_data/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/blog4/_data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="container h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Articles from the interweb
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of some articles on the internets! Enjoy ! 📚
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
