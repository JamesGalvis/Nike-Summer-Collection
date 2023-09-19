interface ButtonProps {
  label: string
  iconUrl?: string
  interaction?: boolean
  bgColor?: string
  textColor?: string
  borderColor?: string
  rounded?: boolean
  fullWidth?: boolean
}

function Button({
  label,
  iconUrl,
  interaction,
  bgColor,
  borderColor,
  textColor,
  fullWidth,
  rounded,
}: ButtonProps) {
  return (
    <button
      className={`group flex justify-center items-center text-base leading-none ${
        bgColor
          ? `${textColor} ${bgColor} ${borderColor} hover:text-white`
          : 'text-white bg-coral-red'
      } hover:bg-black transition gap-2 px-7 py-4 font-montserrat ${
        fullWidth && 'w-full'
      } rouneded-full ${rounded ? 'rounded-full' : 'rounded-lg'}`}
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
