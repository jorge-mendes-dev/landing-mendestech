import { create } from 'zustand'
import type { ClientsConfig } from './types/clientsStore.types'

export const useClientsStore = create<ClientsConfig>(() => ({
  title: `Companies that trust's my work`,
  data: [
    { title: 'FATEC SÃO ROQUE', img: 'fatec' },
    { title: 'SÃO PAULO - STATE DEPARTMENT OF EDUCATION', img: 'gov' },
    { title: 'SRTI', img: 'defaultImg' },
    { title: 'NOVACIA', img: 'novacia' },
    { title: 'ATITUDE DIGITAL MEDIA', img: 'atitude' },
    {
      title:
        'FDTE - FOUNDATION FOR THE TECHNOLOGICAL DEVELOPMENT OF ENGINEERING',
      img: 'fdte'
    },
    { title: 'HOTMART', img: 'hotmart' },
    { title: 'ESCALA APP', img: 'escala' }
  ]
}))
