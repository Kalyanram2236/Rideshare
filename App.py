%%writefile app.py
!pip install streamlit
import streamlit as st
from user_dashboard import user_dashboard
from driver_dashboard import driver_dashboard
from admin_dashboard import admin_dashboard

# Main navigkjjation
st.sidebar.title("Ride-Sharing App")
option = st.sidebar.selectbox("Choose your dashboard", ("User", "Driver", "Admin"))

# Routing to different dashboards
if option == "User":
    user_dashboard()
elif option == "Driver":
    driver_dashboard()
elif option == "Admin":
    admin_dashboard()
