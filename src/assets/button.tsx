type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: keyof typeof buttonStyle;
};

const buttonStyle = {
  "green-fill": "bg-blue-400 text-white font-bold cursor-pointer",
  "red-gradation": "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
  "variantのkey名3": "スタイル",
  "variantのkey名4": "スタイル",
} as const;

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button
      className={`rounded-xl ....(ここら辺にボタンの共通のスタイル) ${buttonStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
