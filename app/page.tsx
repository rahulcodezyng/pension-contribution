import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={"/benefits"}>
        <p className="text-sm underline text-primary mt-4 dark:text-blue-500">
          Navigate to benefits page
        </p>
      </Link>
    </div>
  );
}
