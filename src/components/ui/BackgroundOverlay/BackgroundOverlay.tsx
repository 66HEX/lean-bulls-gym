export default function backgroundOverlay() {
    return (
        <div className="absolute z-0 w-full h-full ">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10" />
        </div>
    );
};