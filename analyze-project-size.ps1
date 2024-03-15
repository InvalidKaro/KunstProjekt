# Save the code below in a file named 'analyze-current-project-folder-size.ps1'.

function Get-Project-Info {
    param(
        [Parameter(Mandatory=$true)]
        [string]$ProjectPath
    )

    if(-not (Test-Path $ProjectPath)) {
        Write-Output "Project path not found: $ProjectPath"
        return
    }

    $ProjectSize = Get-ChildItem -Path $ProjectPath -File -Recurse | Measure-Object -Property Length -Sum

    Write-Output "Project: $PsItem - Size: {0,14:N0} bytes" -f $ProjectSize.Sum
}

Get-Project-Info -ProjectPath (Get-Location).Path