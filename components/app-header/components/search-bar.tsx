"use client";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const query = searchParams.get("query") || "";

  const [term, setTerm] = useState<string>(query);

  const onSubmit = () => {
    if (term === query) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const onChange = (term: string) => setTerm(term);

  return (
    <InputGroup className="max-w-1/2">
      <InputGroupInput
        placeholder="Search..."
        value={term}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton className="hover:cursor-pointer" onClick={onSubmit}>
          Search
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
