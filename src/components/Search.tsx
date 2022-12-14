import type { NodeSearchResult } from "@stoplight/elements-dev-portal";
import { Search as ElementsSearch, useGetNodes } from "@stoplight/elements-dev-portal";
import * as React from "react";

export type SearchProps = {
  projectIds: string[];
  baseSlug: string[];
};

export const Search = ({ projectIds, baseSlug }: SearchProps) => {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { data } = useGetNodes({
    search,
    projectIds,
  });

  const handleClose = () => {
    setOpen(false);
    setSearch("");
  };

  const handleClick = (data: NodeSearchResult) => {
    window.location.href = `../${baseSlug}/${data.slug}`;
  };

  return (
    <>
      <input placeholder="" onFocus={() => setOpen(true)} />
      <ElementsSearch search={search} onSearch={setSearch} onClick={handleClick} onClose={handleClose} isOpen={open} searchResults={data} />
    </>
  );
};
