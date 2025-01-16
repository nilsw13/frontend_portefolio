interface StackBadgeProps {
    variant: string;
    }


function StackBadge({variant}: StackBadgeProps) {

    const getBadgeStyle = (variant: string) => {

        const styles: { [key: string]: string } = {
            'React': 'bg-blue-custom text-white',
            'Node': 'bg-yellow-300 text-gray-900',
            'Java': 'bg-pink-custom text-white',
            'Spring Boot': 'bg-green-200 text-gray-900',
            'PostgreSQL': 'bg-blue-600 text-white'
          };

        return styles[variant] || 'bg-gray-300 text-gray-900';
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