interface StackBadgeProps {
    variant: string;
    }


function StackBadge({variant}: StackBadgeProps) {

    const getBadgeStyle = (variant: string) => {

        const styles: { [key: string]: string } = {
            'nostack': 'items-end hidden',
            'Description': 'bg-yellow-200 text-black',
            'ReactJs - Vite': 'bg-blue-custom text-black',
            'Node': 'bg-yellow-300 text-gray-900',
            'Java - Spring Boot': 'bg-green-300 text-black',
            'Spring Boot': 'bg-green-200 text-gray-900',
            'PostgreSQL': 'bg-blue-400 text-black'
          };

        return styles[variant] || 'bg-yellow-200 text-gray-900';
    };

    return (
        <span className={`
          inline-flex items-center px-3 py-1 
          rounded-none shadow-small-custom hover:shadow-custom text-xs font-medium  hover:-space-y-0.5 transition-all
          ${getBadgeStyle(variant)}
        `}>

          {variant}

        </span>
      );

}

export default StackBadge;