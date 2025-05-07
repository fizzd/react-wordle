import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Tentang permainan ini"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ini adalah versi sumber terbuka bagi permainan meneka perkataan yang
        kita semua tahu dan cinta -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          semak kod di sini
        </a>{' '}
      </p>
    </BaseModal>
  )
}
