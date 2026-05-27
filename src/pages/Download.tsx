import { useState } from 'react';
import { DownloadsMain } from './Download/Main';
import { DownloadsFilter } from './Download/Filter';

export function Downloads() {
  const [selectedSubTypes, setSelectedSubTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (subType: string) => {
    setSelectedSubTypes(prev => 
      prev.includes(subType) 
        ? prev.filter(t => t !== subType) 
        : [...prev, subType]
    );
  };

  const clearFilters = () => {
    setSelectedSubTypes([]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-brand-bg relative overflow-hidden">
      {/* Background blobs for aesthetics */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent-light/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent-dark/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-80 flex-shrink-0">
            <DownloadsFilter 
              selectedSubTypes={selectedSubTypes} 
              onFilterChange={handleFilterChange}
              onClear={clearFilters}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </aside>
          <main className="flex-grow">
            <DownloadsMain 
              selectedSubTypes={selectedSubTypes} 
              searchQuery={searchQuery}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
