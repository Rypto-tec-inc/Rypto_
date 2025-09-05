"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

interface SearchFilterProps {
  categories: string[]
  onSearch: (query: string) => void
  onFilter: (category: string) => void
  activeCategory: string
}

export function SearchFilter({ categories, onSearch, onFilter, activeCategory }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 bg-background/50 backdrop-blur-sm border-accent/30 focus:border-accent glitch-border"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === activeCategory ? "default" : "outline"}
            className={`px-4 py-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
              category === activeCategory
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 animate-pulse-glow"
                : "hover:bg-accent/20 hover:border-accent/50"
            }`}
            onClick={() => onFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
