
interface PracticeProps {
     title?: string,
     children?: React.ReactNode
}


const Practice = (props: PracticeProps) => {
    return (
    <div>
        {props.children}
    </div>
    );
};

export default Practice;
