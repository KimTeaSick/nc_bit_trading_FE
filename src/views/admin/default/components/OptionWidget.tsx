import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";

const OptionWidget = (props: {
    title: string;
    subtitle: string;
    percent: string;
    explanation : string;
}) => {
    const { title, subtitle, percent, explanation } = props;
    return (
    <div className="flex flex-row flex-grow items-center rounded-[20px]">
      <div className="flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
          <MdCheckCircle className="h-6 w-6 text-brand-500 dark:text-white" />
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle} 
          <span className="text-red-500">
          &nbsp;{percent}
          </span>
           %
        </h4>
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default OptionWidget;