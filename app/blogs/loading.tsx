export default function Loading() {
  // Create an array of 8 items to show 8 skeleton cards
  const skeletons = Array.from({ length: 8 });

  return (
    <main className="bg-black min-h-screen py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Skeleton Title */}
        <div className="h-12 w-64 bg-zinc-800 rounded-md mb-12 animate-pulse" />
        
        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skeletons.map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              {/* Card Image Skeleton */}
              <div className="aspect-[4/5] w-full bg-zinc-900 rounded-2xl animate-pulse" />
              {/* Card Title Skeleton */}
              <div className="h-6 w-3/4 bg-zinc-800 rounded animate-pulse" />
              <div className="h-6 w-1/2 bg-zinc-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}