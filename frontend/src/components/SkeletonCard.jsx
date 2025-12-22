const SkeletonCard = () => {
    return (
      <div className="bg-[#0f1d16]/90 border border-white/10 rounded-2xl overflow-hidden animate-pulse">
        {/* Image */}
        <div className="h-56 bg-white/10" />
  
        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="h-4 bg-white/10 rounded w-3/4" />
          <div className="h-3 bg-white/10 rounded w-1/2" />
          <div className="h-4 bg-white/10 rounded w-1/4 mt-4" />
          <div className="h-10 bg-white/10 rounded-full mt-6" />
        </div>
      </div>
    );
  };
  
  export default SkeletonCard;
  