
import StackIcon from './StackIcon'

function StackIconsGroup({ technologiesFront, technologiesBack, db }: { 
    technologiesFront?: string; 
    technologiesBack?: string; 
    db?: string;
  }) {
    return (
      <div className='flex flex-col gap-2 md:flex-row'>
        {technologiesFront && <StackIcon variant={technologiesFront} />}
        {technologiesBack && <StackIcon variant={technologiesBack} />}
        {db && <StackIcon variant={db} />}
      </div>
    );
  }
export default StackIconsGroup