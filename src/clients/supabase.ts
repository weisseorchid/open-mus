import { createClient } from '@supabase/supabase-js'

// Define the environment variables interface
interface SupabaseConfig {
  url: string
  anonKey: string
}

// Get environment variables with fallbacks for development
const getSupabaseConfig = (): SupabaseConfig => {
  const url = import.meta.env.VITE_SUPABASE_URL
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
    )
  }

  return { url, anonKey }
}

// Create the Supabase client
const createSupabaseClient = () => {
  try {
    const config = getSupabaseConfig()
    return createClient(config.url, config.anonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      },
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
    })
  } catch (error) {
    console.error('Failed to create Supabase client:', error)
    throw error
  }
}

// Export the client instance
export const supabase = createSupabaseClient()

// Export types for better TypeScript support
export type { SupabaseClient } from '@supabase/supabase-js'

// Export the createClient function for testing or custom configurations
export { createClient }
