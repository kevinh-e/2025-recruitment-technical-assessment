import * as React from "react"

import { cn } from "@/lib/utils"
import { Search } from "@mui/icons-material"

const SearchInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex justify-items-center px-3 py-1 h-9 w-full rounded-md border border-input bg-transparent",
          className
        )}
        ref={ref}
        {...props}
      >
        <Search />
        <input
          className="w-full px-4 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>
    )
  }
)
SearchInput.displayName = "Input"

export { SearchInput }
