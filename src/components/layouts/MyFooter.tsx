import { Typography } from "@material-tailwind/react";

export function MyFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between ">
      <Typography placeholder="" color="blue-gray" className="font-normal text-sm">
        &copy; 2023 More Ideas
      </Typography>
    </footer>
  );
}
