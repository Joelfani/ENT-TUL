
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tqwinfxzgudfexnwdhce.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxd2luZnh6Z3VkZmV4bndkaGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzA4ODYsImV4cCI6MjA2MjA0Njg4Nn0.cd-20yN0Kq3PfUhsWROMGKxh1gn6ZghTiLFbzvOP_jQ'
export const supabase = createClient(supabaseUrl, supabaseKey,{
    persistSession: true,
    autoRefreshToken: true,
})
