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
        Dibina oleh d&h dengan inspirasi daripada{' '}
        <a
          href="https://www.projecteugene.com/katapat.html"
          className="underline font-bold"
        >
          Katapat
        </a>{' '} dan menggunakan{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Wordle versi sumber terbuka
        </a>{' '}
      </p>
    </BaseModal>
  )
}
