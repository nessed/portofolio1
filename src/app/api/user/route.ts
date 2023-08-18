import { NextResponse } from 'next/server'
 
export async function GET() {
 
  const data ={message:"123"}
 
  return NextResponse.json({ data })
}                                                            