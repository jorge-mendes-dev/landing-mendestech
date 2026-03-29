// React-icons replacements for removed styled-icons
import { FaGithub, FaGoogle, FaLinkedin, FaRegStar } from 'react-icons/fa6'
import { MdComputer, MdWork } from 'react-icons/md'
import { PiStudentFill } from 'react-icons/pi'

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface Icons {
  Github: IconComponent
  Linkedin: IconComponent
  Gmail: IconComponent
  Work: IconComponent
  Education: IconComponent
  StarFill: IconComponent
  Computer: IconComponent
}

const Icons: Icons = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Gmail: FaGoogle,
  Work: MdWork,
  Education: PiStudentFill,
  StarFill: FaRegStar,
  Computer: MdComputer
}

export default Icons
