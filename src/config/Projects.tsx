import defaultImg from 'assets/images/defaultImg.svg'

// plantoes
import admin from 'assets/images/projects/plantoes-admin.png'
import schedules from 'assets/images/projects/plantoes-schedule.png'
import plantoes from 'assets/images/projects/plantoes.svg'

// hotmart
import pagesCreator from 'assets/images/projects/hotmart-pages-creator.png'
import payments from 'assets/images/projects/hotmart-payments.png'
import hotmart from 'assets/images/projects/hotmart.svg'

// aprova
import appClient from 'assets/images/projects/aprova-app-client.png'
import appManager from 'assets/images/projects/aprova-app-corretor.png'
import aprova from 'assets/images/projects/aprova.svg'

// provu
import provuScreen from 'assets/images/projects/provu-screen.png'
import provuSimulator from 'assets/images/projects/provu-simulator.png'
import provu from 'assets/images/projects/provu.svg'

//webmeeting
import webmeetingDirect from 'assets/images/projects/webmeeting-direct.png'
import webmeetingRealtime from 'assets/images/projects/webmeeting-realtime.png'
import webmeeting from 'assets/images/projects/webmeeting2.svg'

//read_it
import {
  default as read01,
  default as readit
} from 'assets/images/projects/read_01.png'
import read02 from 'assets/images/projects/read_02.png'
import read03 from 'assets/images/projects/read_03.png'

// fernanda souza
import fernanda_souza_about from 'assets/images/projects/fernanda_souza_about.png'
import fernanda_souza_header from 'assets/images/projects/fernanda_souza_header.png'
import fernanda_souza_social from 'assets/images/projects/fernanda_souza_social.png'

// private learning hub
import private_learning_hub_chat from 'assets/images/projects/private_learning_hub_chat.png'
import private_learning_hub_player from 'assets/images/projects/private_learning_hub_player.png'
import private_learning_hub_reader from 'assets/images/projects/private_learning_hub_reader.png'

interface Projects {
  [key: string]: string
}

const Projects: Projects = {
  provu,
  aprova,
  plantoes,
  hotmart,
  webmeeting,
  defaultImg,
  schedules,
  admin,
  pagesCreator,
  payments,
  appClient,
  appManager,
  provuScreen,
  provuSimulator,
  webmeetingDirect,
  webmeetingRealtime,
  read01,
  read02,
  read03,
  readit,
  fernanda_souza_header,
  fernanda_souza_about,
  fernanda_souza_social,
  private_learning_hub_player,
  private_learning_hub_reader,
  private_learning_hub_chat
}

export default Projects
