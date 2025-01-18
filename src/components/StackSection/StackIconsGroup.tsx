import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import java from '../../assets/java.svg'
import spring from '../../assets/springboot-custom.svg'
import postgresql from '../../assets/postgresql.svg'
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