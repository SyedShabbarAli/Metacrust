export default function LoadingSpinner() {
  return (
    <div className="h-screen w-screen flex justify-center mt-44">
      <div className=" animate-spin h-12 w-12 rounded-full border-b-4 border-cyan-500" />
    </div>
  );
}
