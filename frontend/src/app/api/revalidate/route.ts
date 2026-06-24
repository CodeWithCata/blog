import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // 🎯 Purges the server-side cache for your main homepage route ('/')
    revalidatePath('/');
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now() 
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating path' }, 
      { status: 500 }
    );
  }
}