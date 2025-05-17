import { Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import TruffleImage from '../../assets/truffle-ghibli.jpeg'
import SpecialImage from '../../assets/special.jpeg'
import { fireConfetti } from '../../util/fireConfetti'
import { isTodaySunday } from '../../util/dateUtils'

type Props = {
  isOpen: boolean
  message: string
  variant?: 'success' | 'warning' | 'copied'
  confetti?: boolean
}

export const Alert = ({
  isOpen,
  message,
  variant = 'warning',
  confetti,
}: Props) => {
  const WinImage = isTodaySunday() ? SpecialImage : TruffleImage

  const classes = classNames(
    'fixed top-16 left-1/2 transform -translate-x-1/2 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
    {
      'bg-rose-500 text-white': variant === 'warning',
      'bg-blue-500 text-white': variant === 'success' || variant === 'copied',
    }
  )

  useEffect(() => {
    if (isOpen && confetti && variant === 'success') {
      fireConfetti()
    }
  }, [isOpen, confetti, variant])

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={classes}>
        <div className="p-4">
          <p className="text-sm text-center font-medium">{message}</p>
          {variant === 'success' && (
            <div className="flex justify-center items-center p-4">
              <img src={WinImage} alt="Success" className="w-50 h-50" />
            </div>
          )}
        </div>
      </div>
    </Transition>
  )
}
