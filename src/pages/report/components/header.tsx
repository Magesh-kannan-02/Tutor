import { CircularProgress } from "@/components";
import { ReportNavbar, type NavBarProps } from "./navbar";
import type { CircularProgressProps } from "../../../components/ui/circularprogressbar/circularprogressbar";
import { cn } from "@/lib/utils";

interface HeaderProps extends CircularProgressProps, NavBarProps {
  className?: string;
  description?: string;
  descriptionClasName?: string;
  title?: string;
  onBack?: () => void;
}

export const ReportHeader = ({
  className,
  description,
  size = 160,
  value,
  strokeWidth = 15,
  trackColor = "#1f3b28",
  gradientFrom = "#63FF7F",
  gradientTo = "#035C24",
  label = "Score",
  valueClassName = "",
  labelClassName = "",
  descriptionClasName='',
  title,
  onBack,
  ...rest
}: HeaderProps) => {
  return (
    <div className={cn(className, "w-full flex items-center flex-col  !gap-[1.563rem]")} {...rest}>
      <ReportNavbar onBack={onBack}  title={title} />
      <CircularProgress label={label} value={value} size={130}  gradientFrom={gradientFrom} gradientTo={gradientTo} strokeWidth={strokeWidth} valueClassName={valueClassName} labelClassName={labelClassName} trackColor={trackColor}/>
      <p className={cn(descriptionClasName,"font-sans px-[1rem] text-h6 text-center !text-secondary-150 leading-snug")} dangerouslySetInnerHTML={{__html:description || ""}}/>
    </div>
  );
};
