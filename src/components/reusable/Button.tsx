interface ButtonProps {
  label: string
  iconUrl?: string
  interaction?: boolean
}

function Button({ label, iconUrl, interaction }: ButtonProps) {
  return (
    <button
      className={`group flex justify-center items-center text-base leading-none text-white bg-coral-red gap-2 px-7 py-4 font-montserrat rounded-lg`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="Right row icon"
          className={`w-5 h-5 ml-2 rounded-full ${
            interaction && 'group-hover:ml-3 transition-all'
          }`}
        />
      )}
    </button>
  )
}

export default Button
