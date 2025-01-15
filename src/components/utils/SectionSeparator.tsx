interface SectionSeparatorProps {
    title?: string
  }
  
  export function SectionSeparator({ title }: SectionSeparatorProps) {
    return (
      <div className="w-full my-16 relative">
        {/* Decorative lines */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed border-blue-custom/80 mx-auto"></div>
        </div>
        
        {/* Center dot pattern */}
        <div className="relative flex justify-center">
          <div className="bg-[#FDF5E6] px-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-custom"></div>
            <div className="w-2 h-2 rounded-full bg-blue-custom opacity-60"></div>
            <div className="w-2 h-2 rounded-full bg-blue-custom"></div>
          </div>
        </div>
  
        {/* Title if provided */}
        {title && (
          <div className="relative flex justify-center -mt-3">
            <div 
              className="bg-pink-custom px-6 py-1 font-medium text-lg text-white"
              style={{
                boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              {title}
            </div>
          </div>
        )}
      </div>
    )
  }
  
  