export default function TestPage() {
  return (
    <div style={{padding: '20px', backgroundColor: 'red', color: 'white'}}>
      <h1>TEST PAGE - This should be different from homepage</h1>
      <p>If you see this red page, routing is working!</p>
      <p>If you see the homepage instead, there's a fundamental routing issue.</p>
    </div>
  );
}